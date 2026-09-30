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
      [ "Prerequisites", "md_doc_2xdma__backend.html#autotoc_md40", null ],
      [ "Mapping of XDMA driver interfaces", "md_doc_2xdma__backend.html#autotoc_md41", [
        [ "AXI-Lite Master interface", "md_doc_2xdma__backend.html#autotoc_md42", null ],
        [ "AXI MM DMA interface", "md_doc_2xdma__backend.html#autotoc_md43", null ],
        [ "Interrupt lines (events)", "md_doc_2xdma__backend.html#autotoc_md44", null ]
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
"class_chimera_t_k_1_1_register_path.html#a6ccb225c24d44fc469dc190a1fba80af",
"class_chimera_t_k_1_1_subdevice_register_accessor.html#aa1c186bcc6d833ac92611b7e2b87fc8a",
"class_chimera_t_k_1_1_transfer_element_abstractor.html#a484eb9101cf36e01d4d31d0acd1b597b",
"class_chimera_t_k_1_1_type_changing_decorator.html#a6bcabca59d9f63a8075f012a32feeb08",
"class_chimera_t_k_1_1_unified_backend_test.html#a9c890ada4943fa0122974fac766461f8",
"class_chimera_t_k_1_1async_1_1_data_consistency_realm.html#a351d8c5645cccbc74e90c598dc14c97b",
"class_chimera_t_k_1_1async_1_1_sub_domain.html#a82218e475e9091590e43b675082004d6",
"class_dummy_register_test.html#aaa98a1dfb3684b4b7a6b79b8c9096579",
"examples.html",
"md_doc_2xdma__backend.html#autotoc_md41",
"namespace_chimera_t_k_1_1numeric__address.html#a2aef0f7eb61675ccae139db6cf3d342e",
"struct_bool_as_void.html#a1d58a0c9109bfa2f38513fab38b2643f",
"struct_chimera_t_k_1_1_img_header.html#aaf9a47e6519ebbc4be090577b759e401",
"struct_chimera_t_k_1_1_rebot_protocol1.html#a03ca701e16d90df9f0e7df26f6431f1c",
"struct_counting_decorator.html#a25378ac118add8d71116f1a0ecb49d12",
"struct_integers_signed32_async.html#a7b52eb221c1ef2a17f28c19e0b688921",
"struct_numeric_addressed_low_level_transfer_element__start_address.html#ae88b5262632eb727221a29537226002b",
"struct_reg_variable_as_push_parameter_in_math__not__written.html#afeec0df569889dfe85ab8773483ada31",
"struct_static_core.html#a9f378f04e938c96995b98456be372630",
"test_device_info_map_8cpp.html#a19823c5af9fff4070c144dacf022bf94",
"test_l_map_math_plugin_8cpp.html",
"test_raw_converter_8cpp.html#a8628c55cf246ce27ed360f2a0c529ad9",
"test_type_changing_decorator_8cpp.html#a1633ee79166f0aa14e99de3e9ecabc16"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';