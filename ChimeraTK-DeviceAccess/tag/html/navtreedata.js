/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "ChimeraTK-DeviceAccess", "index.html", [
    [ "First steps", "index.html#first_steps", null ],
    [ "Multi Value Registers (1D Register Accessors)", "accessor1d.html", null ],
    [ "2D Register Accessors", "accessor2d.html", null ],
    [ "Using and creating custom backends", "custom_backends.html", [
      [ "Writing Dummies: Extending the DummyBackend", "custom_backends.html#writing_dummies", null ],
      [ "The Plugin Mechanism", "custom_backends.html#plugin_mechanism", [
        [ "Linking custom backends at compile time (recommended)", "custom_backends.html#linking_backends", null ],
        [ "Loading custom backends at run time", "custom_backends.html#loading_backends", null ],
        [ "Writing your own backed", "custom_backends.html#writing_backends", null ],
        [ "Debian packaging scheme for external backends", "custom_backends.html#backend_packaging_scheme", [
          [ "Usage in the packaging scripts", "custom_backends.html#backend_packaging_usage", null ]
        ] ]
      ] ]
    ] ],
    [ "Data Consistency Group", "data_consistency_group.html", null ],
    [ "Design: AsyncNDRegisterAccessor", "design__async_n_d_register_accessor__numeric_addressed.html", [
      [ "Concept overview", "design__async_n_d_register_accessor__numeric_addressed.html#conceptOverview", [
        [ "AsyncNDRegisterAccessors and the AsyncAccessorManager", "design__async_n_d_register_accessor__numeric_addressed.html#design_AsyncAccessorManager", null ],
        [ "The TriggeredPollDistributor", "design__async_n_d_register_accessor__numeric_addressed.html#design_TriggeredPollDistributor", null ],
        [ "The SubDomain", "design__async_n_d_register_accessor__numeric_addressed.html#design_SubDomain", null ],
        [ "Vision: Using the VariableDistributor DOOCS backend", "design__async_n_d_register_accessor__numeric_addressed.html#design_envisioned_DoocsDistributor", null ]
      ] ],
      [ "The AsyncNDRegisterAccessor and the AsyncAccessorManager", "design__async_n_d_register_accessor__numeric_addressed.html#design_AsyncNDRegisterAccessor", [
        [ "Design decisions and implementation details", "design__async_n_d_register_accessor__numeric_addressed.html#AsyncNDRegisterAccessor_details", null ],
        [ "Exception handling", "design__async_n_d_register_accessor__numeric_addressed.html#AsyncNDRegisterAccessor_exceptions", null ],
        [ "Interface for implementing backends", "design__async_n_d_register_accessor__numeric_addressed.html#AsyncNDRegisterAccessor_usage", null ]
      ] ],
      [ "Implementation in the NumericAddressedBackend", "design__async_n_d_register_accessor__numeric_addressed.html#design_async_NumericAddressedBackend", [
        [ "Asynchronous registers in the map file", "design__async_n_d_register_accessor__numeric_addressed.html#design_async_map_file", [
          [ "Canonical interrupt names", "design__async_n_d_register_accessor__numeric_addressed.html#design_async_canonical_interrupt_name", null ]
        ] ]
      ] ]
    ] ],
    [ "Device Mapping", "dmap.html", [
      [ "file search (NumericAddressedBackend-based backends)", "dmap.html#Map", null ],
      [ "CimeraTK device descriptor", "dmap.html#The", null ]
    ] ],
    [ "Exceptions and recovery", "exceptions.html", [
      [ "Exceptions", "exceptions.html#Exceptions", null ],
      [ "isFunctional()", "exceptions.html#isFunctional", null ],
      [ "Recovery", "exceptions.html#recovery", [
        [ "Recovery on re-open", "exceptions.html#recover_open", null ],
        [ "Automatic recovery", "exceptions.html#auto_recover", null ],
        [ "No recovery necessary", "exceptions.html#no_recovery", null ]
      ] ]
    ] ],
    [ "JMAP map file format", "jmap.html", [
      [ "Fundamental concepts", "jmap.html#jmap_fundamentals", [
        [ "Comments", "jmap.html#jmap_comments", null ]
      ] ],
      [ "Register entry", "jmap.html#jmap_register", [
        [ "Address", "jmap.html#jmap_address", null ],
        [ "Access", "jmap.html#jmap_access", null ],
        [ "Number of elements and bytes per element", "jmap.html#jmap_elements", null ],
        [ "Representation", "jmap.html#jmap_representation", null ],
        [ "Description and engineering unit", "jmap.html#jmap_description", null ],
        [ "Conditional register selection", "jmap.html#jmap_register_selection", [
          [ "Module-Level Selection Inheritance", "jmap.html#jmap_module_selection_inheritance", null ]
        ] ]
      ] ],
      [ "Modules and hierarchical names", "jmap.html#jmap_modules", [
        [ "Modules", "jmap.html#jmap_simple_modules", null ],
        [ "Address inheritance", "jmap.html#jmap_address_inheritance", null ]
      ] ],
      [ "Advanced features", "jmap.html#jmap_advanced", [
        [ "Interrupts", "jmap.html#jmap_interrupts", null ],
        [ "2D multiplexed registers", "jmap.html#jmap_2d", [
          [ "Channel slices", "jmap.html#jmap_channel_slices", null ],
          [ "Channel bit fields", "jmap.html#jmap_channel_bitfields", null ],
          [ "Conditional channels", "jmap.html#jmap_channel_selection", null ]
        ] ],
        [ "Double buffering", "jmap.html#jmap_double_buffering", null ],
        [ "Bit fields", "jmap.html#jmap_bitfields", null ]
      ] ],
      [ "Metadata", "jmap.html#jmap_metadata", null ],
      [ "See also", "jmap.html#jmap_references", null ]
    ] ],
    [ "Logical Name Mapping Backend", "lmap.html", [
      [ "CDD syntax", "lmap.html#cdd", null ],
      [ "Map file syntax", "lmap.html#map", [
        [ "Variables and constants", "lmap.html#variables_and_constants", null ],
        [ "Self-referencing redirects", "lmap.html#internal_redirect", null ]
      ] ],
      [ "Accessor plugins", "lmap.html#plugins", [
        [ "List of plugins", "lmap.html#plugins_reference", [
          [ "multiply", "lmap.html#plugins_reference_multiply", null ],
          [ "math", "lmap.html#plugins_reference_math", null ],
          [ "forceReadOnly", "lmap.html#plugins_reference_force_read_only", null ],
          [ "forcePollingRead", "lmap.html#plugins_reference_force_polling_read", null ],
          [ "monostableTrigger", "lmap.html#plugins_reference_monostable_trigger", null ],
          [ "typeHintModifier", "lmap.html#plugins_reference_type_hint_modifier", null ],
          [ "Double Buffering plugin for the Logical Name Mapper", "lmap.html#double_buffering_plugin", null ],
          [ "bitRange", "lmap.html#plugins_reference_bit_range", null ]
        ] ],
        [ "tagModifier", "lmap.html#plugins_reference_tag_modifier", null ],
        [ "isStatusOutput", "lmap.html#plugins_reference_is_status_output", null ],
        [ "hasReverseRecovery", "lmap.html#plugins_reference_is_reverse_recovery", null ],
        [ "fanOut", "lmap.html#plugins_reference_fanout", null ]
      ] ]
    ] ],
    [ "Basic Example", "basic_example.html", null ],
    [ "Accessing numeric-addressed registers without a map file", "numeric_addresses.html", null ],
    [ "Questions and Answers", "q_and_a.html", [
      [ "Why do RegisterAccessors not have an assignment operator for other RegisterAccessors?", "q_and_a.html#why_no_accessor_assignment", [
        [ "Details:", "q_and_a.html#q_and_a_details", null ]
      ] ],
      [ "Why can I not read SEQUENCE registers?", "q_and_a.html#use_sequences", null ]
    ] ],
    [ "Technical specification: Mapping of DataConsistencyKeys to VersionNumbers V0.0WIP", "spec__data_consistency_key_mapping.html", null ],
    [ "Technical specification DeviceBackend", "spec__device_backend.html", null ],
    [ "Technical specification: TransferElement V1.2", "spec__transfer_element.html", null ],
    [ "Testing applications using the DummyBackends", "testing_with_dummy_backends.html", [
      [ "Specifying the dummies in the device map file", "testing_with_dummy_backends.html#dmap_specify_dummies", null ],
      [ "Writeing to read-only registers", "testing_with_dummy_backends.html#dummy_backends_write_readonly", null ]
    ] ],
    [ "Using push-type inputs with AccessMode::wait_for_new_data", "wait_for_new_data.html", null ],
    [ "XDMA backend", "md_doc_2xdma__backend.html", [
      [ "Prerequisites", "md_doc_2xdma__backend.html#autotoc_md49", null ],
      [ "Mapping of XDMA driver interfaces", "md_doc_2xdma__backend.html#autotoc_md50", [
        [ "AXI-Lite Master interface", "md_doc_2xdma__backend.html#autotoc_md51", null ],
        [ "AXI MM DMA interface", "md_doc_2xdma__backend.html#autotoc_md52", null ],
        [ "Interrupt lines (events)", "md_doc_2xdma__backend.html#autotoc_md53", null ]
      ] ]
    ] ],
    [ "Change Requests", "change_requests.html", [
      [ "Index", "change_requests.html#change_requests_index", null ],
      [ "CR-001: Interrupt-driven reads on double-buffered registers (verification)", "md_doc_2change-requests_2_c_r-001-interrupts-with-double-buffering.html", [
        [ "Requirements", "md_doc_2change-requests_2_c_r-001-interrupts-with-double-buffering.html#autotoc_md1", null ],
        [ "Specifications", "md_doc_2change-requests_2_c_r-001-interrupts-with-double-buffering.html#autotoc_md2", [
          [ "How the path already works (no code change)", "md_doc_2change-requests_2_c_r-001-interrupts-with-double-buffering.html#autotoc_md3", null ],
          [ "Out of scope: BUF0/BUF1 buffer views", "md_doc_2change-requests_2_c_r-001-interrupts-with-double-buffering.html#autotoc_md4", null ]
        ] ],
        [ "Test plan", "md_doc_2change-requests_2_c_r-001-interrupts-with-double-buffering.html#autotoc_md5", null ]
      ] ],
      [ "CR-002: Test interrupt-driven reads on a double-buffered named channel", "md_doc_2change-requests_2_c_r-002-interrupt-driven-double-buffered-named-channel.html", [
        [ "Requirements", "md_doc_2change-requests_2_c_r-002-interrupt-driven-double-buffered-named-channel.html#autotoc_md7", null ],
        [ "Specifications", "md_doc_2change-requests_2_c_r-002-interrupt-driven-double-buffered-named-channel.html#autotoc_md8", null ],
        [ "Test plan", "md_doc_2change-requests_2_c_r-002-interrupt-driven-double-buffered-named-channel.html#autotoc_md9", null ]
      ] ],
      [ "CR-003: Support bit ranges in named channels of a 2D register", "md_doc_2change-requests_2_c_r-003-bit-ranges-in-named-channels.html", [
        [ "Requirements", "md_doc_2change-requests_2_c_r-003-bit-ranges-in-named-channels.html#autotoc_md11", null ],
        [ "Specifications", "md_doc_2change-requests_2_c_r-003-bit-ranges-in-named-channels.html#autotoc_md12", null ],
        [ "Test plan", "md_doc_2change-requests_2_c_r-003-bit-ranges-in-named-channels.html#autotoc_md13", null ],
        [ "Alternatives considered", "md_doc_2change-requests_2_c_r-003-bit-ranges-in-named-channels.html#autotoc_md14", null ]
      ] ],
      [ "CR-004: Tests for data consistency keys in double-buffered registers", "md_doc_2change-requests_2_c_r-004-data-consistency-keys-in-double-buffered-registers.html", [
        [ "Requirements", "md_doc_2change-requests_2_c_r-004-data-consistency-keys-in-double-buffered-registers.html#autotoc_md16", null ],
        [ "Specifications", "md_doc_2change-requests_2_c_r-004-data-consistency-keys-in-double-buffered-registers.html#autotoc_md17", null ],
        [ "Test plan", "md_doc_2change-requests_2_c_r-004-data-consistency-keys-in-double-buffered-registers.html#autotoc_md18", null ]
      ] ],
      [ "CR-005: Tool to write a jmap file from a device catalogue", "md_doc_2change-requests_2_c_r-005-device-to-jmap.html", [
        [ "Requirements", "md_doc_2change-requests_2_c_r-005-device-to-jmap.html#autotoc_md20", null ],
        [ "Specifications", "md_doc_2change-requests_2_c_r-005-device-to-jmap.html#autotoc_md21", null ],
        [ "Test plan", "md_doc_2change-requests_2_c_r-005-device-to-jmap.html#autotoc_md22", null ]
      ] ],
      [ "CR-006: JMAP file format version 1.0", "md_doc_2change-requests_2_c_r-006-jmap-file-format-version.html", [
        [ "Requirements", "md_doc_2change-requests_2_c_r-006-jmap-file-format-version.html#autotoc_md24", null ],
        [ "Specifications", "md_doc_2change-requests_2_c_r-006-jmap-file-format-version.html#autotoc_md25", null ],
        [ "Test plan", "md_doc_2change-requests_2_c_r-006-jmap-file-format-version.html#autotoc_md26", null ]
      ] ],
      [ "CR-009: Rebot connection close must not throw on a reset connection", "md_doc_2change-requests_2_c_r-009-rebot-connection-close-on-reset.html", [
        [ "Requirements", "md_doc_2change-requests_2_c_r-009-rebot-connection-close-on-reset.html#autotoc_md28", null ],
        [ "Specifications", "md_doc_2change-requests_2_c_r-009-rebot-connection-close-on-reset.html#autotoc_md29", [
          [ "Alternatives considered", "md_doc_2change-requests_2_c_r-009-rebot-connection-close-on-reset.html#autotoc_md30", null ]
        ] ],
        [ "Test plan", "md_doc_2change-requests_2_c_r-009-rebot-connection-close-on-reset.html#autotoc_md31", null ]
      ] ]
    ] ],
    [ "Todo List", "todo.html", null ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", "namespacemembers_dup" ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", null ]
      ] ]
    ] ],
    [ "Concepts", "concepts.html", "concepts" ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", null ],
        [ "Related Symbols", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", "globals_func" ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Macros", "globals_defs.html", "globals_defs" ]
      ] ]
    ] ],
    [ "Examples", "examples.html", "examples" ]
  ] ]
];

var NAVTREEINDEX =
[
"_access_mode_8cc.html",
"_l_n_m_backend_bit_accessor_8cc.html#a8c9f67bf29e708e827da1dcb0376dcf0",
"_shared_dummy_backend_8h.html",
"_xdma_backend_8cc_source.html",
"class_chimera_t_k_1_1_backend_register_catalogue_impl_iterator.html#a68383c00737bf770f7509bb21ca6a4a0",
"class_chimera_t_k_1_1_data_descriptor.html",
"class_chimera_t_k_1_1_device_file.html#a1a9b71e14fffb41effba59eb1017e788",
"class_chimera_t_k_1_1_dummy_backend_base.html#a896685c8d5d0058ba9499a06ebb82561",
"class_chimera_t_k_1_1_l_n_m_backend_1_1_accessor_plugin.html#ad2cec9cda3017970bbcb1fdc3e0d5cf6",
"class_chimera_t_k_1_1_l_n_m_backend_bit_accessor.html#a21432897852ea89ab69913c59baabff0",
"class_chimera_t_k_1_1_logical_name_mapping_backend.html#a72f1bf37a09e7c088658d00ed8b83ac8",
"class_chimera_t_k_1_1_numeric_addressed_backend.html#aef57505941eacbf57bf9db5f8680cfa1",
"class_chimera_t_k_1_1_numeric_addressed_register_info.html#a3820feb4789985e98ed1ac110bcd74a0a47c7e7cb36a953a8c47e02000036bb44",
"class_chimera_t_k_1_1_read_any_group_1_1_notification.html#ad459b4b963fd00043d1b8792f5104cb1",
"class_chimera_t_k_1_1_register_path.html#a612e5402e6acc561064443c534c5b547",
"class_chimera_t_k_1_1_subdevice_register_accessor.html#a990ab9554975fe0c33ebac5793c2ee19",
"class_chimera_t_k_1_1_transfer_element_abstractor.html#a4016da23732e91a38e484e8cf9808f67",
"class_chimera_t_k_1_1_type_changing_decorator.html#a4c8e7416c044eeac1d7676fa91c0a96d",
"class_chimera_t_k_1_1_unified_backend_test.html#a94ba0ed39caefa030410e63937e41b48",
"class_chimera_t_k_1_1async_1_1_data_consistency_realm.html",
"class_chimera_t_k_1_1async_1_1_sub_domain.html#a7541f001f510459213749ab0c88e9cbf",
"class_dummy_register_test.html#a6a476d9aec16f7a3c1c21ae13efe1b61",
"dmap.html#Map",
"md_doc_2change-requests_2_c_r-006-jmap-file-format-version.html",
"namespace_chimera_t_k_1_1csa__helpers.html#a72977d2c7ac821eeccf2a8ba7e419968",
"struct_bit_register_descriptor_base.html#a070ba0d9bdd145f103de37f4913eef12",
"struct_chimera_t_k_1_1_img_header.html#a528fe25c81e0a564f4093da7e4b9a666",
"struct_chimera_t_k_1_1_rebot_protocol0_1_1_register_info.html",
"struct_constant_register_descriptor_base.html",
"struct_integers_base.html#a7ca3366068eb38ef08377e18fdeb6c68",
"struct_new_backend.html#a569a3484da2cce7f6e0b8dd5da572587",
"struct_reg_upper_half_of_firmware.html#ad4ea75e1620d7ef41f3255084ca70b80",
"struct_static_core.html#a2eba5dcb8602cda0416c3ea027fc470b",
"test_data_consistency_realm_8cpp.html#a58288abb28d9223ce54dc088cc6db6f6",
"test_l_map_file_8cpp.html",
"test_raw_converter_8cpp.html#a4b4edc265050c3971e52f9643040e649",
"test_transfer_group_8cpp.html#a6b2a3852db8bb19ab6909bac01859985"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';