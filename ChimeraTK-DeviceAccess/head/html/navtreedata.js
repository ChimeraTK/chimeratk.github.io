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
    [ "CR-001: Interrupt-driven reads on double-buffered registers (verification)", "md__2scratch_2dragon_2sources_2_chimera_t_k-_device_access_2doc_2change-requests_2_c_r-001-interrupts-with-double-buffering.html", [
      [ "Requirements", "md__2scratch_2dragon_2sources_2_chimera_t_k-_device_access_2doc_2change-requests_2_c_r-001-interrupts-with-double-buffering.html#autotoc_md1", null ],
      [ "Specifications", "md__2scratch_2dragon_2sources_2_chimera_t_k-_device_access_2doc_2change-requests_2_c_r-001-interrupts-with-double-buffering.html#autotoc_md2", [
        [ "How the path already works (no code change)", "md__2scratch_2dragon_2sources_2_chimera_t_k-_device_access_2doc_2change-requests_2_c_r-001-interrupts-with-double-buffering.html#autotoc_md3", null ],
        [ "Out of scope: BUF0/BUF1 buffer views", "md__2scratch_2dragon_2sources_2_chimera_t_k-_device_access_2doc_2change-requests_2_c_r-001-interrupts-with-double-buffering.html#autotoc_md4", null ]
      ] ],
      [ "Test plan", "md__2scratch_2dragon_2sources_2_chimera_t_k-_device_access_2doc_2change-requests_2_c_r-001-interrupts-with-double-buffering.html#autotoc_md5", null ]
    ] ],
    [ "CR-002: Test interrupt-driven reads on a double-buffered named channel", "md__2scratch_2dragon_2sources_2_chimera_t_k-_device_access_2doc_2change-requests_2_c_r-002-inter5ee6fa1d1cb7114fd715d160bec4b9cb.html", [
      [ "Requirements", "md__2scratch_2dragon_2sources_2_chimera_t_k-_device_access_2doc_2change-requests_2_c_r-002-inter5ee6fa1d1cb7114fd715d160bec4b9cb.html#autotoc_md7", null ],
      [ "Specifications", "md__2scratch_2dragon_2sources_2_chimera_t_k-_device_access_2doc_2change-requests_2_c_r-002-inter5ee6fa1d1cb7114fd715d160bec4b9cb.html#autotoc_md8", null ],
      [ "Test plan", "md__2scratch_2dragon_2sources_2_chimera_t_k-_device_access_2doc_2change-requests_2_c_r-002-inter5ee6fa1d1cb7114fd715d160bec4b9cb.html#autotoc_md9", null ]
    ] ],
    [ "CR-003: Support bit ranges in named channels of a 2D register", "md__2scratch_2dragon_2sources_2_chimera_t_k-_device_access_2doc_2change-requests_2_c_r-003-bit-ranges-in-named-channels.html", [
      [ "Requirements", "md__2scratch_2dragon_2sources_2_chimera_t_k-_device_access_2doc_2change-requests_2_c_r-003-bit-ranges-in-named-channels.html#autotoc_md11", null ],
      [ "Specifications", "md__2scratch_2dragon_2sources_2_chimera_t_k-_device_access_2doc_2change-requests_2_c_r-003-bit-ranges-in-named-channels.html#autotoc_md12", null ],
      [ "Test plan", "md__2scratch_2dragon_2sources_2_chimera_t_k-_device_access_2doc_2change-requests_2_c_r-003-bit-ranges-in-named-channels.html#autotoc_md13", null ],
      [ "Alternatives considered", "md__2scratch_2dragon_2sources_2_chimera_t_k-_device_access_2doc_2change-requests_2_c_r-003-bit-ranges-in-named-channels.html#autotoc_md14", null ]
    ] ],
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
        [ "Conditional register selection", "jmap.html#jmap_register_selection", null ]
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
    [ "XDMA backend", "md__2scratch_2dragon_2sources_2_chimera_t_k-_device_access_2doc_2xdma__backend.html", [
      [ "Prerequisites", "md__2scratch_2dragon_2sources_2_chimera_t_k-_device_access_2doc_2xdma__backend.html#autotoc_md32", null ],
      [ "Mapping of XDMA driver interfaces", "md__2scratch_2dragon_2sources_2_chimera_t_k-_device_access_2doc_2xdma__backend.html#autotoc_md33", [
        [ "AXI-Lite Master interface", "md__2scratch_2dragon_2sources_2_chimera_t_k-_device_access_2doc_2xdma__backend.html#autotoc_md34", null ],
        [ "AXI MM DMA interface", "md__2scratch_2dragon_2sources_2_chimera_t_k-_device_access_2doc_2xdma__backend.html#autotoc_md35", null ],
        [ "Interrupt lines (events)", "md__2scratch_2dragon_2sources_2_chimera_t_k-_device_access_2doc_2xdma__backend.html#autotoc_md36", null ]
      ] ]
    ] ],
    [ "Todo List", "todo.html", null ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
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
"_sub_domain_8h_source.html",
"accessor2_d__multiplexed_8cpp.html#ae66f6b31b5ad750f1fe042a706a4e3d4",
"class_chimera_t_k_1_1_backend_register_info_base.html#a3f0665538d48ad46a558af532f647a72",
"class_chimera_t_k_1_1_data_descriptor.html#aaab62545dad995c54e3ca0994df5a6e6",
"class_chimera_t_k_1_1_device_info_map.html#a7876a112d9a343ead515c9ede6eb407e",
"class_chimera_t_k_1_1_dummy_multiplexed_register_accessor.html",
"class_chimera_t_k_1_1_l_n_m_backend_1_1_bit_range_access_plugin.html#a007abdf0ae0ca4a030f41a9dc9aab132",
"class_chimera_t_k_1_1_l_n_m_backend_bit_accessor.html#af0f684eb43ab495074a0f1dd6c8b6b15",
"class_chimera_t_k_1_1_logical_name_mapping_backend.html#ac3778f93fd48c9073c1f8c2e1106e980",
"class_chimera_t_k_1_1_numeric_addressed_backend_a_s_c_i_i_accessor.html#a8924c545e7f3feff9763e31643d99ce1",
"class_chimera_t_k_1_1_numeric_addressed_register_info.html#a8d73d9807e48cba323df752dcab39c6f",
"class_chimera_t_k_1_1_rebot_backend.html#a3288127514c4650a38177443ea021281",
"class_chimera_t_k_1_1_register_path.html#ac4b813fafa64ea898bc9b114291621a5",
"class_chimera_t_k_1_1_subdevice_register_window_accessor.html#a464ddfb44bc0cb406458d25cd75f303b",
"class_chimera_t_k_1_1_transfer_element_abstractor.html#abd8551b10b0f394763b5a250d1d5d53c",
"class_chimera_t_k_1_1_type_changing_direct_cast_decorator_3_01_chimera_t_k_1_1_void_00_01std_1_1string_01_4.html#ae88453390ba133c8b54bde81466480ad",
"class_chimera_t_k_1_1_unified_backend_test.html#ad387cb1c6bce5574bb2bc99f55273a0f",
"class_chimera_t_k_1_1async_1_1_domain.html#aa68537a48ba1f10214400be834db2a5e",
"class_chimera_t_k_1_1async_1_1_triggered_poll_distributor.html#a55b1901a2df558c2b6287edb8312b818",
"class_invalid_dummy_backend.html#aefb4dc53a4f413ddf44ecf90fdff97a3",
"functions_func_g.html",
"namespace_chimera_t_k.html#a3014565c0fa0cadd5639c2a264790404ac30f9bfedd3b51210afc21ec78115a5c",
"pciedev__io__compat_8h.html#a198b5f4fef9dff99b6c27836f972bc19",
"struct_chimera_t_k_1_1_data_consistency_group_detail_1_1_historized_matcher_1_1_target_element.html#a2ce5393c8c8463807f6aee3f4876f63a",
"struct_chimera_t_k_1_1_l_n_m_backend_1_1_monostable_trigger_plugin_decorator.html#aadf6d012d297b5db5a406beea2caf791",
"struct_chimera_t_k_1_1_test_capabilities.html#aa3dab38a857fe9e27addf23ee0e7e6d3",
"struct_double_buffered_named_channel_slice.html#a9417efe24ec6a374504c368c5deb07ed",
"struct_muxed_area1.html#aaa7ad11a3852f7500a3d6405f1b51594",
"struct_reg_bit_range_descriptor.html#a65c76ad4e1c71c60750bf1e532271ed8",
"struct_reg_word_firmware_forced_read_only.html",
"struct_triggered_int.html#a12c243d3998b62d002bac0c0b3140892",
"test_float_raw_data_8cpp.html",
"test_n_d_register_accessor_decorator_8cpp.html",
"test_sub_array_accessor_decorator_8cc.html#a2ba06a91e2d40d2f34fe91578c38e000"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';